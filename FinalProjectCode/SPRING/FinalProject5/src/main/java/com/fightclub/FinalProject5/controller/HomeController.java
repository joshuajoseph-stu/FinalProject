//package com.fightclub.FinalProject5.controller;
//
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//
//@Controller
//public class HomeController {
//
//	@GetMapping("/home")
//	public String home(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
//		model.addAttribute("name", name);
//		return "index";
//	}
//	
//	@GetMapping("/login")
//	public String login(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
//		model.addAttribute("name", name);
//		return "login";
//	}
//	
//	@GetMapping("/jewelleryall")
//	public String jewelleryall(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
//		model.addAttribute("name", name);
//		return "allJewellery";
//	}
//	
//	@GetMapping("/jeweladmin")
//	public String jeweladmin(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
//		model.addAttribute("name", name);
//		return "jeweladmin";
//	}
//	
//	@GetMapping("/jewelcreate")
//	public String jewelcreate(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
//		model.addAttribute("name", name);
//		return "createjewel";
//	}
//	
//	@GetMapping("/jewelupdate")
//	public String jewelupdate(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
//		model.addAttribute("name", name);
//		return "updatejewel";
//	}
//	
//	@GetMapping("/jeweldelete")
//	public String jeweldelete(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
//		model.addAttribute("name", name);
//		return "deletejewel";
//	}
//	
//	
//
//}