package co.com.sofkau.petproject.petproject.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "orders")
public class Orders {

    @Id
    private String id;

    @Indexed(unique=true)
    private Long CodeOrder;

    private List<Product> orderList;



    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Long getCodeOrder() {
        return CodeOrder;
    }

    public void setCodeOrder(Long codeOrder) {
        CodeOrder = codeOrder;
    }

    public List<Product> getOrderList() {
        return orderList;
    }

    public void setOrderList(List<Product> orderList) {
        this.orderList = orderList;
    }

    public Orders(Long codeOrder, List<Product> orderList) {
        CodeOrder = codeOrder;
        this.orderList = orderList;
    }

    @Override
    public String toString() {
        return "Orders{" +
                "id='" + id + '\'' +
                ", CodeOrder=" + CodeOrder +
                ", orderList=" + orderList +
                '}';
    }
}
