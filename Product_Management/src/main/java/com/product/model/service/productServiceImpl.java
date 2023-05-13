package com.product.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.model.modelentity.product;
import com.product.model.repo.productRepo;

@Service
public class productServiceImpl implements productService {
	
	@Autowired
	private productRepo productRep; 

	@Override
	public product saveProduct(product products) {
		
		return productRep.save(products);
	}

	@Override
	public List<product> getAllProduct() {
		
		return productRep.findAll();
	}

	@Override
	public product getProductById(Integer id) {
		
		return productRep.findById(id).get();
	}

	@Override
	public String deleteProduct(Integer id) {
		product products = productRep.findById(id).get();
		
		if(products != null) {
			
			productRep.delete(products);
			return "Product Deleted Successfully";
		}
		return "Something wrong on server";
		
	}

	@Override
	public product editProduct(product p, Integer id) 
	{
		product oldProduct = productRep.findById(id).get();
		
		oldProduct.setProductName(p.getProductName());
		oldProduct.setDescription(p.getDescription());
		oldProduct.setPrice(p.getPrice());
		oldProduct.setStatus(p.getStatus());
		
		return productRep.save(oldProduct);
	}
	
	
	

}
