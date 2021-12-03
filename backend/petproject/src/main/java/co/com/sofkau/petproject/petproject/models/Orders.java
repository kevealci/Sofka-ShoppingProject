package co.com.sofkau.petproject.petproject.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "orders")
public class Orders {

    @Id
    private String id;

    private Long CodeOrder;

    private String userName;
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public List<Product> getOrderList() {
        return orderList;
    }

    public void setOrderList(List<Product> orderList) {
        this.orderList = orderList;
    }

    public Orders(Long codeOrder, String userName, List<Product> orderList) {
        CodeOrder = codeOrder;
        this.userName = userName;
        this.orderList = orderList;
    }
}
