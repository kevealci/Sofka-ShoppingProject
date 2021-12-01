package co.com.sofkau.petproject.petproject.service;


import co.com.sofkau.petproject.petproject.models.Product;
import co.com.sofkau.petproject.petproject.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;


    public ResponseEntity<List<Product>> getAll() {
        try {
            List<Product> productos = new ArrayList<>();
            productos = productRepository.findAll();
            if (productos.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<List<Product>>(productos, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    public ResponseEntity<Product> getByProductCode(Long codeProduct) {
        try {
            System.out.println("service");
            System.out.println(codeProduct);
            Optional<Product> product = productRepository.findByProductCode(codeProduct);
            System.out.println(product);
            if (product.isPresent()) {
                return new ResponseEntity<Product>(product.get(), HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    public ResponseEntity<Product> save(Product product) {
        try {
            productRepository.save(product);
            return new ResponseEntity<Product>(product, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }


    public boolean deleteByProductCode(Long code) {
        ResponseEntity<Product> aux = getByProductCode(code);
        if (aux.getStatusCodeValue() != 200) {
            return false;
        }

        try {
            productRepository.delete(aux.getBody());
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}
