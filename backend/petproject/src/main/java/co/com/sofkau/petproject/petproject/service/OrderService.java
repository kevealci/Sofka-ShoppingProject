package co.com.sofkau.petproject.petproject.service;


import co.com.sofkau.petproject.petproject.models.Orders;
import co.com.sofkau.petproject.petproject.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    OrderRepository orderRepository;


    public ResponseEntity<List<Orders>> getAllOrders() {
        try {
            List<Orders> orders = new ArrayList<>();
            orders = orderRepository.findAll();
            if (orders.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<List<Orders>>(orders, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    public ResponseEntity<Orders> getByCodeOrder(String codeOrder) {
        try {
            Optional<Orders> order = orderRepository.findByCodeOrder(codeOrder);
            if (order.isPresent()) {
                return new ResponseEntity<Orders>(order.get(), HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    public ResponseEntity<Orders> save(Orders order) {
        try {
            orderRepository.save(order);
            return new ResponseEntity<Orders>(order, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }


    public boolean updateByCodeOrder(String code, Orders order) {
        ResponseEntity<Orders> aux = getByCodeOrder(code);
        if (aux.getStatusCodeValue() != 200) {
            return false;
        }

        try {
            Orders auxOrder = aux.getBody();
            order.setCodeOrder(auxOrder.getCodeOrder());
            order.setId(auxOrder.getId());
            orderRepository.save(order);
            return true;
        } catch (Exception e) {
            return false;
        }
    }


    public boolean deleteByCodeOrder(String code) {
        ResponseEntity<Orders> aux = getByCodeOrder(code);
        if (aux.getStatusCodeValue() != 200) {
            return false;
        }

        try {
            orderRepository.delete(aux.getBody());
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}
