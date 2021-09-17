package com.mikecode.product.dao;

import com.mikecode.product.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = { "x-auth-token", "x-requested-with", "x-xsrf-token" })
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByName(String lastName);
    List<Product> findByDescription(String lastName);
}
