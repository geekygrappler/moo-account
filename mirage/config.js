export default function () {
    
    this.timing = 3000;
    
    this.get('/orders', (schema) => {
        const orders = schema.orders;
        return {
            "data": orders.map((order) => {
                return {
                    "type": "orders",
                    "id": order.id,
                    "attributes": {
                        "delivery-date": order.deliveryDate
                    },
                    "relationships": {
                        "order-items": {
                            "data": order.orderItemIds.map((orderItemId) => {
                                return {
                                    "type": "order-items",
                                    "id": orderItemId
                                };
                            })
                        }
                    }
                };
            })
        };
    });
    
    this.get('order-items/:id', (schema, request) => {
        const orderItem = schema.orderItems.find(request.params.id);
        return {
            "data": {
                "type": "order-items",
                "id": orderItem.id,
                "attributes": {
                    "price": orderItem.price,
                    "quantity": orderItem.quantity
                },
                "relationships": {
                    "project": {
                        "data": {
                            "type": "projects",
                            "id": orderItem.projectId
                        }
                    }
                }
            }
        };
    });
    
    this.get('projects', (schema) => {
        const projects = schema.projects;
        return {
            "data": projects.map((project) => {
                return {
                    "type": "projects",
                    "id": project.id,
                    "attributes": {
                        "title": project.title,
                        "description": project.description,
                        "image": project.image,
                        "product-type": project.productType
                    }
                };
            })
        };
    });
    
    this.get('projects/:id', (schema, request) => {
        const project = schema.projects.find(request.params.id);
        return {
            "data": {
                "type": "projects",
                "id": project.id,
                "attributes": {
                    "title": project.title,
                    "description": project.description,
                    "image": project.image,
                    "product-type": project.productType
                }
            }
        };
    });

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
  
      Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
  
      this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
    */
}
