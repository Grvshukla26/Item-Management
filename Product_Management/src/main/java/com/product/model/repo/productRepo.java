package com.product.model.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.product.model.modelentity.product;

public interface productRepo extends JpaRepository<product, Integer>{

}
