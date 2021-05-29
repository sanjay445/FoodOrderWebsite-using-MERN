import React from 'react'
import axios from 'axios'
import {DISHES} from './dishes.js'
class Liststudent extends React.Component
{
    state = {
        students : DISHES,
		 id:'',
        firstname:'',
        lastname:'',
        place:'',
		email:'',
        phone:'',
		food:'',
		price:'',
		quantity:'',
		total:'',
		address:''
    }
  
   
    handleUpdate = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
	
	handleTotal = (e)=>{   
		const tot=Number(this.state.price)*Number(this.state.quantity)
		this.setState({total:tot});
    }
	
    
	handleSubmit = ()=>{
        if(this.state.firstname!=='' && this.state.lastname!=='' && this.state.place!=='')
        {
            axios.post('http://localhost:5000/students',this.state)
            .then(res=>{
                console.log('successfully posted');
                this.setState({firstname:'',lastname:'',place:'',email:'',phone:'',food:'',price:'',quantity:'',total:'',address:''});	
            });
			 window.location = '/';          
        }     
    }
    render()
    {
        return(
            <div>
              {
                  this.state.students.map(student=>(
                      <div key={student._id} class="card" style={{borderRadius:'10px',padding:'15px',backgroundColor:'white',display:'inline-block',marginLeft:'15px',marginTop:'10px'}}>
	                            <div class="card-body">
								<img src={student.image} alt="food-img"/>
                                <h2>Name: {student.name}</h2>
                                <h2>Price: {student.price}</h2>
                                <div class="container" style={{display:'inline'}}>
                                    
                                    
                                    <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal" onClick={()=>{this.setState({id:student._id,food:student.name,price:student.price})}}>BUY</button>
									
                                    <div class="modal fade" id="myModal" role="dialog">
                                        <div class="modal-dialog">
                                        
                            
                                        <div class="modal-content">
                                            <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title">Enter Your Details</h4>
                                            </div>
                                            <div class="modal-body">
												<input onChange={(e)=>this.handleUpdate(e)} value={this.state.food} name='food' class="form-control" style={{marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} placeholder="Food Name"/>
                                                <input onChange={(e)=>this.handleUpdate(e)} value={this.state.price} name='price' class="form-control" style={{marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} placeholder="Price"/>
												<input onChange={(e)=>this.handleUpdate(e)} value={this.state.quantity} name='quantity' class="form-control" style={{marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} placeholder="Quantity"/>
                                                <input onChange={(e)=>this.handleUpdate(e)} value={this.state.firstname} name='firstname' class="form-control" style={{marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} placeholder="First Name"/>
                                                <input onChange={(e)=>this.handleUpdate(e)} value={this.state.lastname} name='lastname' class="form-control" style={{marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} placeholder="Last Name"/>
                                                <input onChange={(e)=>this.handleUpdate(e)} value={this.state.place} name='place' class="form-control" style={{marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} placeholder="Place"/>
												<input onChange={(e)=>this.handleUpdate(e)} value={this.state.email} name='email' class="form-control" style={{marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} placeholder="Email"/>
                                                <input onChange={(e)=>this.handleUpdate(e)} value={this.state.phone} name='phone' class="form-control" style={{marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} placeholder="Phone"/>
												<input onChange={(e)=>this.handleUpdate(e)} value={this.state.address} name='address' class="form-control" style={{marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} placeholder="Address"/>
												<h2>Total : {this.state.total}</h2>
                                            </div>
                                            <div class="modal-footer">
											<button class="btn btn-primary" onClick={(e)=>this.handleTotal(e)}>Total</button>  
                                            <button class="btn btn-warning" onClick={(e)=>this.handleSubmit(e)}>Submit</button>    
                                            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>{this.setState({firstname:'',lastname:'',place:''})}}>Close</button>
                                            </div>
                                        </div>
                                        
                                        </div>
                                    </div>
                                    
                                    </div>
                                
                            </div>
                      </div> 
                  ))
              }
            </div>
        );
    }
}
export default Liststudent;