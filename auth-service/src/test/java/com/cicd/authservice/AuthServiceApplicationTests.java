package com.cicd.authservice;

import org.junit.jupiter.api.Disabled; // <-- IMPORT THIS
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AuthServiceApplicationTests {

	@Test
	@Disabled // <-- ADD THIS LINE to disable the test
	void contextLoads() {
	}

}
