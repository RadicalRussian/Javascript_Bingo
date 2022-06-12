function BingoCard(){
    // delcaration of property named matrix with a empty value by default.
    this.matrix =[];
    // Method generate Matix the will put a value to the matrix.
    this.generateMatrix = () => {
        // declaration of array B I N G O 
        var b =[];
        var i =[];
        var n =[];
        var g =[];
        var o =[];

        // Putting a value in each index of array named "b" with a length of 5
        // Generating each index of array named "b" of a random using the built in Math.random()
        // Using the built in Math.floor() method for getting the whole number only, which is given by the method Math.random()
        // Bingo card column B has numbers from 1 to 15, using the formula (maximum - minimum) + 1 we will get the numbersranges from 1 to 15
        for(var a =0; a< 5; a++){
            b[a]= Math.floor(Math.random()*(15-1)+1);
        }
        // This loop is for validation, making sure that every number of array is unique.
        // We use a nested for loop to to compare every index.
        // If the loop found a same number(not on the same index) it generates again with a new number.
        for(var outer =0; outer < b.length; outer++){
            for(var inner =0; inner < b.length; inner++){
                if(inner != outer && b[outer] == b[inner]){
                    b[outer] = Math.floor( Math.random() * (15-1) + 1 );
                }
            }
        }
        //adding the array naemd "b2 which hold an array values to the multidimensional array named "matrix"
        this.matrix.push(b);


        for(var a =0; a< 5; a++){
            i[a]= Math.floor(Math.random()*(30-16)+16);
        }
        for(var outer =0; outer < i.length; outer++){
            for(var inner =0; inner < b.length; inner++){
                if(inner != outer && i[outer] == i[inner]){
                    i[outer] = Math.floor( Math.random() * (30-16) + 16 );
                }
            }
        }
        this.matrix.push(i);

        for(var a =0; a< 5; a++){
            n[a]= Math.floor(Math.random()*(45-31)+31);
        }
        for(var outer =0; outer < n.length; outer++){
            for(var inner =0; inner < b.length; inner++){
                if(inner != outer && n[outer] == n[inner]){
                    n[outer] = Math.floor( Math.random() * (45-31) + 31 );
                }
            }
        }
        this.matrix.push(n);

        for(var a =0; a< 5; a++){
            g[a]= Math.floor(Math.random()*(60-46)+46);
        }
        for(var outer =0; outer < g.length; outer++){
            for(var inner =0; inner < g.length; inner++){
                if(inner != outer && g[outer] == g[inner]){
                    g[outer] = Math.floor( Math.random() * (60-46) + 46 );
                }
            }
        }
        this.matrix.push(g);

        for(var a =0; a< 5; a++){
            o[a]= Math.floor(Math.random()*(75-61)+61);
        }
        for(var outer =0; outer < g.length; outer++){
            for(var inner =0; inner < o.length; inner++){
                if(inner != outer && o[outer] == o[inner]){
                    o[outer] = Math.floor( Math.random() * (75-61) + 61 );
                }
            }
        }
        this.matrix.push(o);
        return this.matrix;
    }

    //Method for shwoing the cards generated by the matrix into the table 
    this.drawCard = () => {
        return `<div>
        <table>
            <tr>
                <th>B</th>
                <th>I</th>
                <th>N</th>
                <th>G</th>
                <th>O</th> 
            </tr>
            <tr>
                <td id = "${this.matrix[0][0]}">${this.matrix[0][0]}</td> 
                <td id = "${this.matrix[1][0]}">${this.matrix[1][0]}</td> 
                <td id = "${this.matrix[2][0]}">${this.matrix[2][0]}</td> 
                <td id = "${this.matrix[3][0]}">${this.matrix[3][0]}</td> 
                <td id = "${this.matrix[4][0]}">${this.matrix[4][0]}</td>
            </tr>
            <tr>
                <td id = "${this.matrix[0][1]}">${this.matrix[0][1]}</td> 
                <td id = "${this.matrix[1][1]}">${this.matrix[1][1]}</td> 
                <td id = "${this.matrix[2][1]}">${this.matrix[2][1]}</td> 
                <td id = "${this.matrix[3][1]}">${this.matrix[3][1]}</td> 
                <td id = "${this.matrix[4][1]}">${this.matrix[4][1]}</td>
            </tr>
            <tr>
                <td id = "${this.matrix[0][2]}">${this.matrix[0][2]}</td> 
                <td id = "${this.matrix[1][2]}">${this.matrix[1][2]}</td> 
                <td id = "${this.matrix[2][2]}" style="background:red;><p id="free>FREE</p></td> 
                <td id = "${this.matrix[3][2]}">${this.matrix[3][2]}</td> 
                <td id = "${this.matrix[4][2]}">${this.matrix[4][2]}</td>
            </tr>
            <tr>
                <td id = "${this.matrix[0][3]}">${this.matrix[0][3]}</td> 
                <td id = "${this.matrix[1][3]}">${this.matrix[1][3]}</td> 
                <td id = "${this.matrix[2][3]}">${this.matrix[2][3]}</td> 
                <td id = "${this.matrix[3][3]}">${this.matrix[3][3]}</td> 
                <td id = "${this.matrix[4][3]}">${this.matrix[4][3]}</td>
            </tr>
            <tr>
                <td id = "${this.matrix[0][4]}">${this.matrix[0][4]}</td> 
                <td id = "${this.matrix[1][4]}">${this.matrix[1][4]}</td> 
                <td id = "${this.matrix[2][4]}">${this.matrix[2][4]}</td> 
                <td id = "${this.matrix[3][4]}">${this.matrix[3][4]}</td> 
                <td id = "${this.matrix[4][4]}">${this.matrix[4][4]}</td>
            </tr>
        </table>
        <br>
    </div>`
    }
}
