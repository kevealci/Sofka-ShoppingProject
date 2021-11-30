package co.com.sofkau.petproject.petproject.repository;


import co.com.sofkau.petproject.petproject.models.Orders;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface OrderRepository extends MongoRepository<Orders, String> {
    Optional<Orders> findByCodeOrder(String code);
}
