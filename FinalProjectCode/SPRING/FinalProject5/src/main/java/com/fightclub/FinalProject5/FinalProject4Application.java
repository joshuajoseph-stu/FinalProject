package com.fightclub.FinalProject5;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@SpringBootApplication
public class FinalProject4Application {

	public static void main(String[] args) {
		SpringApplication.run(FinalProject4Application.class, args);
	}
	
	@Bean
	public WebMvcConfigurer corsConfigure(){
		return new WebMvcConfigurer() {
			
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
				.allowedMethods("GET","POST","PUT","DELETE","OPTIONS","PATCH")
				.allowedOrigins("*");
			}
		};
	}
	
//	to access swagger console use http://localhost:8080/swagger-ui.html
	
//	to access h2 console use http://localhost:8080/h2-console/ 
//	saved settings: generic h2 (embedded)
//	setting name:  generic h2 (embedded)
//	driver class: org.h2.Driver
//	jdbc url: jdbc:h2:./dbstorage/demodb
//	username: sa
//	password: password
	
//	THIS DOESNT WORK/DONT USE
//	localhost:8080/api/whatever to access api end (in controller files) 
//	localhost:8080/whatever to access html pages (in src/main/resources/templates)
//	so use http://localhost:8080/home to access home page and stuff
		
	
	
}
