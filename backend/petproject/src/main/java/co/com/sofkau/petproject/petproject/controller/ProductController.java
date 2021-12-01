package co.com.sofkau.petproject.petproject.controller;


import co.com.sofkau.petproject.petproject.models.Product;
import co.com.sofkau.petproject.petproject.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Clase con las metodos del controlador de Ordenes
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/product")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping
    public ResponseEntity<List<Product>> getAll() {
        return productService.getAll();
    }

    @GetMapping("/{code}")
    public ResponseEntity<Product> getByCode(@PathVariable("code") Long code) {
        System.out.println("code = " + code);
        return productService.getByProductCode(code);
    }

    @PostMapping
    public ResponseEntity<Product> save(@RequestBody Product product){
        return productService.save(product);
    }



    @DeleteMapping(value = "/{code}")
    public boolean deleteByCodeOrder(@PathVariable("code") Long code){
        return productService.deleteByProductCode(code);
    }
}
