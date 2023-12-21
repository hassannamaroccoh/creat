import "../Styles/Create.css"
const Create = () => {
    return ( 
        <>
          <aside>
        <h2>Reset your password</h2>
        <div className="input">
        <label for="New password"></label>
        <input type="text" id="password" placeholder="Email address"/>
        
      
        <label for="Comferm password"></label>
        <input type="text" id="password" placeholder="Phone number"/>

      
        
         <div className="one">

         <p>Already have an account ? login</p>
         <button className="btn">Continue</button>
         </div>
        
    
    
    
        </div>

        
          
        </aside>
        </>
     );
}
 
export default Create;