a = prompt("Enter the first string:")
b = prompt("Enter the second string:")
s = isAnagram(a,b)

function isAnagram(a,b){
     stra = a.toLowerCase().split("").sort().join("");
     strb = b.toLowerCase().split("").sort().join("");
     stra.length;
     strb.length;
     return Boolean(stra === strb);
    }    

    if (s == true){
        console.log("Enter two strings and I'll tell you if they are anagrams:","\n",
        "Enter the first string:",a.toLowerCase(),"\n",
        "Enter the second string:",b.toLowerCase(),"\n" ,
        "\"",a.toLowerCase(),"\"","and","\"",b.toLowerCase(),"\"","are anagrams.")
      } else
      console.log("Enter two strings and I'll tell you if they are anagrams:","\n",
      "Enter the first string:",a.toLowerCase(),"\n",
      "Enter the second string:",b.toLowerCase(),"\n" ,
      "\"",a.toLowerCase(),"\"","and","\"",b.toLowerCase(),"\"","are not anagrams.")
      
      isAnagram(a,b)