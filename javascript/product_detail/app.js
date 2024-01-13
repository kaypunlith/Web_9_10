const Item=[
    {
        "Img":"./photo/coffee1.jpeg",
        "Name":"Amazon",
        "des":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, reiciendis.",

    },
    {
        "Img":"./photo/coffee2.jpeg",
        "Name":"Amazon",
        "des":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, reiciendis.",
        
    },
    {
        "Img":"./photo/coffee3.jpeg",
        "Name":"Amazon",
        "des":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, reiciendis.",
        
    },
    {
        "Img":"./photo/coffee4.jpeg",
        "Name":"Amazon",
        "des":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, reiciendis.",
        
    },
    {
        "Img":"./photo/coffee5.jpeg",
        "Name":"Amazon",
        "des":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, reiciendis.",
        
    },
    {
        "Img":"./photo/coffee6.jpeg",
        "Name":"Amazon",
        "des":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, reiciendis.",
        
    },
    {
        "Img":"./photo/pp2.jpg",
        "Name":"Amazon",
        "des":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, reiciendis.",
        
    },
    {
        "Img":"./photo/pp1.jpg",
        "Name":"Amazon",
        "des":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, reiciendis.",
        
    },

];
 getallproduct();
function getallproduct(){
    var data="";
    for (const i of Item) {
        data+=`
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 item-box g-4">
                <div class="box">
                    <div class="box-img">
                        <img src="${i.Img}" alt="">
                    </div>
                    <div class="box-title">
                        <h1>Coffee one</h1>
                        <p>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>

                        </p>    
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, hic?</p>
                        <button class="btn btn-outline-primary btn_add">Add to card</button>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById("stor_data").innerHTML=data;

}
var count=document.querySelector(".count");
var btn_closth=document.querySelector(".btn-closth");
var table=document.querySelector(".table-box");
var Add_data=document.querySelectorAll(".btn_add");
document.getElementById("btn_count").addEventListener("click",function(){
    table.style.display="block";
});
btn_closth.addEventListener("click",function(){
    table.style.display="none";
})
function getlistitem(){
var data=""
var index=0;
Add_data.forEach((el,i) =>{
    el.addEventListener("click",function(){
        count.innerHTML=index;
        index++;
        data+=`
        <tr>
            <td>
                <img src="${Item[i].Img}" alt="" width="80px" height="80px" style="object-fit: cover;">
            </td>
            <td>
                ${Item[i].Name}
            </td>
            <td>
                <button class="btn btn-danger del">Delete</button>
            </td>
         </tr>
        
        `;
        Delete();
        document.getElementById("tbl_data").innerHTML=data;
    })
});
}
getlistitem();

function Delete(){
   var btndel=document.querySelectorAll(".del");
   btndel.forEach((el,i)=>{
    el.addEventListener("click",function(){
     alert(123);
    })
   })
}

