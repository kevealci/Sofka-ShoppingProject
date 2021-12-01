package co.com.sofkau.petproject.petproject.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "products")
public class Product {
    @Id
    private String id;

    @Override
    public String toString() {
        return "Product{" +
                "id='" + id + '\'' +
                ", productCode=" + productCode +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", description='" + description + '\'' +
                '}';
    }

    @Indexed(unique=true)
    private Long productCode;

    private String name;
    private double price;
    private String description;


    public Product(Long productCode, String name, double price) {
        this.productCode = productCode;
        this.name = name;
        this.price = price;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Long getProductCode() {
        return productCode;
    }

    public void setProductCode(Long productCode) {
        this.productCode = productCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
