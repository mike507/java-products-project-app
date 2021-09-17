package com.mikecode.product;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestBuilders.formLogin;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.security.test.web.servlet.response.SecurityMockMvcResultMatchers.authenticated;
import static org.springframework.security.test.web.servlet.response.SecurityMockMvcResultMatchers.unauthenticated;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@RunWith(SpringJUnit4ClassRunner.class)
class ProductApplicationTests {

	@Test
	void contextLoads() {
	}

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private WebApplicationContext context;

	@Before
	public void setup() {
		mockMvc = MockMvcBuilders
				.webAppContextSetup(context)
				.apply(springSecurity())
				.build();
	}

	@Test
	public void shouldReturnAllProducts() throws Exception {
		this.mockMvc.perform(get("/api/products"))
						//.with(user("user").password("password").roles("USER")))
				.andExpect(status().isOk());
	}

	@Test
	public void shouldLoginForm() throws Exception {
		this.mockMvc
				.perform(formLogin("/login").user("user").password("password"))
				.andExpect(authenticated());
	}

	@Test
	public void shouldLoginUrl() throws Exception {
		this.mockMvc
				.perform(post("/login").with(user("user").password("password")))
				.andExpect(authenticated());
	}

	@Test
	public void shouldLogout() throws Exception {
		this.mockMvc
				.perform(post("/logout").with(csrf().asHeader()))
				.andExpect(unauthenticated());
	}

	@Test
	public void shouldReturnUser() throws Exception {
		this.mockMvc
				.perform(get("/user"))
				//.andDo(print())
				.andExpect(status().isOk())	;

	}
}
