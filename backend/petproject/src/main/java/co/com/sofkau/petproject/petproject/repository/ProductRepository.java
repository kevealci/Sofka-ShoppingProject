package co.com.sofkau.petproject.petproject.repository;

import co.com.sofkau.petproject.petproject.models.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends MongoRepository<Product, String> {
    Optional<Product> findByProductCode(Long code);
}
