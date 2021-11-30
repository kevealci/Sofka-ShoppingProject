package co.com.sofkau.petproject.repository;

import co.com.sofkau.petproject.models.Orders;
import co.com.sofkau.petproject.models.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ProductRepository extends MongoRepository<Product, String> {
    Optional<Product> findByProductCode(String code);
}
