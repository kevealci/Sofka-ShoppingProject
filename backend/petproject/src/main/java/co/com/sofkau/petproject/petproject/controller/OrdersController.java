package co.com.sofkau.petproject.petproject.controller;


import co.com.sofkau.petproject.petproject.models.Orders;
import co.com.sofkau.petproject.petproject.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Clase con las metodos del controlador de Ordenes
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/order")
public class OrdersController {

    @Autowired
    OrderService orderService;

    @GetMapping
    public ResponseEntity<List<Orders>> getAll() {
        return orderService.getAllOrders();
    }

    @GetMapping(value = "/{code}")
    public ResponseEntity<Orders> getByCode(@PathVariable("code") String code) {
        return orderService.getByCodeOrder(code);
    }

    @PostMapping
    public ResponseEntity<Orders> save(@RequestBody Orders order){
        return orderService.save(order);
    }

    @PutMapping(value = "/{code}")
    public boolean updateByCodeOrder(@PathVariable("code") String code, @RequestBody Orders order){
        return orderService.updateByCodeOrder(code, order);
    }

    @DeleteMapping(value = "/{code}")
    public boolean deleteByCodeOrder(@PathVariable("code") String code){
        return orderService.deleteByCodeOrder(code);
    }
}
