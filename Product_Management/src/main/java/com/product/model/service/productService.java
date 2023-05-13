package com.product.model.service;

import java.util.List;

import com.product.model.modelentity.product;

public interface productService {
	
	public product saveProduct(product products);
	
	public List<product> getAllProduct();
	
	public product getProductById(Integer id);
	
	public String deleteProduct(Integer id);
	
	public product editProduct(product products, Integer id);
	
	

}
