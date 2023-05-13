package com.product.model.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.product.model.modelentity.product;
import com.product.model.service.productService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {
	
	@Autowired
	private productService productServices;
	
	@PostMapping("/saveProduct")
	public ResponseEntity<?> saveProduct(@RequestBody product products)
	{
		return new ResponseEntity<>(productServices.saveProduct(products), HttpStatus.CREATED);
		
	}
	
	@GetMapping("/")
	public ResponseEntity<?> getAllProduct(){
		return new ResponseEntity<>(productServices.getAllProduct(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getProductById(@PathVariable Integer id){
		return new ResponseEntity<>(productServices.getProductById(id), HttpStatus.OK);
		
	}
	
	@GetMapping("/deleteProduct/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable Integer id)
	{
		return new ResponseEntity<>(productServices.deleteProduct(id), HttpStatus.OK);
	}
	
	@PostMapping("/editProduct/{id}")
	public ResponseEntity<?> editProduct(@RequestBody product products,@PathVariable Integer id)
	{
		return new ResponseEntity<>(productServices.editProduct(products,id), HttpStatus.CREATED);
		
	} 
	

}
