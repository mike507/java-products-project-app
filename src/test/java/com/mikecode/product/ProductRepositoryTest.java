package com.mikecode.product;

import com.mikecode.product.dao.ProductCategoryRepository;
import com.mikecode.product.dao.ProductRepository;
import com.mikecode.product.entity.Product;
import com.mikecode.product.entity.ProductCategory;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(classes = ProductApplication.class)
public class ProductRepositoryTest {

    @Autowired
    ProductRepository productRepository;

    @MockBean
    ProductCategoryRepository productCategoryRepository;

    @Test
    public void productRepositorySaveDataTest() throws Exception {

        ProductCategory PRODUCT_CATEGORY_1 = new ProductCategory(1l, "Products to sell");
        Product PRODUCT_1 = new Product(1l, PRODUCT_CATEGORY_1, "Sun in the mountain", "Image in the sun", "arthur-yfIVHbP5QaA-unsplash.jpg", new Date());

        productRepository.save(PRODUCT_1);
        List<Product> queryResultProduct1 = productRepository.findByName("Sun in the mountain");
        assertFalse(queryResultProduct1.isEmpty());
        assertNotNull(queryResultProduct1.get(0));
        System.out.println(queryResultProduct1.get(0));

        List<Product> queryResultAll = productRepository.findAll();

        assertFalse(queryResultAll.isEmpty());
        assertNotNull(queryResultAll.get(0));
        System.out.println(queryResultAll.get(0));
    }
}
