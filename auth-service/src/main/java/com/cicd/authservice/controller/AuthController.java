package com.cicd.authservice.controller;

import com.cicd.authservice.model.User;
import com.cicd.authservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException; // Import this
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<String> authenticateUser(@RequestBody User loginRequest) {
        // ... (login method is fine, no changes needed)
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        return new ResponseEntity<>("User signed-in successfully!", HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody User signUpRequest) {
        System.out.println("--- SIGNUP ENDPOINT HIT ---");
        System.out.println("Received data: " + signUpRequest.toString());

        // Check if username is already taken
        if (userRepository.findByUsername(signUpRequest.getUsername()).isPresent()) {
            System.out.println("Error: Username is already taken.");
            return new ResponseEntity<>("Username is already taken!", HttpStatus.BAD_REQUEST);
        }

        // Create new user's account
        User user = new User();
        user.setUsername(signUpRequest.getUsername());
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));

        try {
            System.out.println("Attempting to save user...");
            userRepository.save(user);
            System.out.println("--- USER SAVED SUCCESSFULLY ---");
            return new ResponseEntity<>("User registered successfully", HttpStatus.OK);

        } catch (DataIntegrityViolationException e) {
            System.err.println("!!! DATABASE ERROR: FAILED TO SAVE USER !!!");
            System.err.println("Most likely a duplicate email or other constraint violation.");
            e.printStackTrace(); // This will print the full error
            return new ResponseEntity<>("Email is already in use or another database error occurred.", HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            System.err.println("!!! AN UNEXPECTED ERROR OCCURRED !!!");
            e.printStackTrace();
            return new ResponseEntity<>("An unexpected error occurred during registration.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
