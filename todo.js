$(document).ready(function(){
    var count=0;
    $(".nav-link").click(function(){
        $("#warn").hide();
        $("#head").html("Toadys task");
        $("#head").css({"color":"#fcf951ff","margin-top":"50px","margin-left":"50px"});
        $("#head").css("text-align","left");
        createtable();
        $("footer").css("position","sticky");
    });
   

    function createtable() {

        //Clear result div
        $("#view").html("");

        //Crate table html tag
        var table = $("<table id=DynamicTable border=1></table>").appendTo("#view");
        $("table").css("margin","50");
        //Create table header row
        var rowHeader = $("<tr></tr>").appendTo(table);
        $("<th></th>").text("No").appendTo(rowHeader);
        $("<th></th>").text("Title").appendTo(rowHeader);
        $("<th></th").text("Check").appendTo(rowHeader);
        
        //Get JSON data by calling action method in controller
        $.getJSON("https://jsonplaceholder.typicode.com/todos",(data)=>{
            
                for(let i=0;i<50;i++)
                {
                //Create new row for each record
                /*console.log(data);
                console.log(data[0]);
                console.log(data[0].title);*/
                var row = $("<tr></tr>").appendTo(table);
                $("<td></td>").text(data[i].id).appendTo(row);
                $("<td></td>").text(data[i].title).appendTo(row);
                if(data[i].completed==true)
                $("<td></td>").html("<input type=checkbox id=checklist name=checktodo checked disabled>").appendTo(row);   
                if(data[i].completed==false)
                $("<td></td>").html("<input type=checkbox>").appendTo(row);   

                }
        
        });
    }
    //count during each click event
   /* $(document).on('change', '[type=checkbox]', function() {
        count++;
        console.log("count "+count);
       
        }); */

        $(document).on('change', '[type=checkbox]', function() {
            var flag;
            console.log("clicked");
            if($(this).prop("checked") == true)
                flag=1;
            else
                 flag=0; 
            console.log();
        //  checkcount();
           var promise1=checkcount(flag);
            promise1
              .then(function(c){
               alert(" Congrats. 5 Tasks have been Successfully Completed");
               count=0;
               alert("You can complete more tasks ");
               });
               
        });
        
       function checkcount(flag){
            return new Promise(function(resolve,reject){
                if(flag==1)
                count++;
                else
                count--;
                console.log("count: "+count);
                if(count==5)
                {
                    resolve(count);
                }
                
                
            });
        } 



    
       // alert("count "+count);
});