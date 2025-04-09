```mermaid
sequenceDiagram
    participant Main
    FoodTruck->>Main: 

    Vegetables->>FoodTruck: 
    participant Vegetables
   
    Entrees->>FoodTruck: 
    participant Entrees
    
    Sides->>FoodTruck: 
    participant Sides

Vegetables ->> TransientState: 
Entrees ->> TransientState: 
Sides ->> TransientState: 

    participant TransientState
    TransientState->>API: 
   
    API->>TransientState: 
    participant API
```