import {
    Checkbox,
    HStack,
    Heading,
    Radio,
    RadioGroup,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { useSearchParams } from "react-router-dom";
  import { styled } from "styled-components";
  
  const SideBar = ({clear,setDataClear}) => {
  
  
  
    
    const [SearchParam, SetSearchParam] = useSearchParams();
  
  
    const intialGender = SearchParam.get("gender");
    const intialCateory = SearchParam.getAll("category");
    const intialColor = SearchParam.getAll("color")
    const [gender, setgender] = useState(intialGender|| "")
    const [category, setcategory] = useState(intialCateory || []);
    const [color ,setcolors]= useState(intialColor||[])
    const intialSortOrder = SearchParam.get("order")
    const intialSortBy = SearchParam.get("sortby")
    const [order, SetOrder] = useState(intialSortOrder || "")
    const [sortBy, SetSortBy] = useState(intialSortBy || "")
  
  
    const handleCategory = (e) => {
      const { value } = e.target;
      let newCategory = [...category];
      if (newCategory.includes(value)) {
        newCategory = newCategory.filter((el) => el !== value)
      } else {
        newCategory.push(value)
      }
  
      setcategory(newCategory)
    };
  
  
    const handleColors = (e) => {
      const { value } = e.target;
      let newColors = [...color];
      if (newColors.includes(value)) {
        newColors = newColors.filter((el) => el !== value)
      } else {
        newColors.push(value)
      }
  
      setcolors(newColors)
    };
     
    const handleGender = (e) =>{
      setgender(e.target.value)
    };
  
    useEffect(()=>{
      let params ={
        color,
        category, 
      }
      gender && (params.gender = gender);
      SetSearchParam(params)
    },[color,gender,category]);
  
  
    if(clear){
      let params={
        color:[],
        category:[],
        gender:""
      }
      SetSearchParam(params);
      setDataClear()
    }
    
  
    return (
      <DIV>
        <div className="gender">
          <RadioGroup>
            <VStack display={"flex"} alignItems={"start"}>
              <Radio onChange={handleGender} value="Men" defaultChecked={gender === "Men"}>Men</Radio>
              <Radio onChange={handleGender} value="Women" defaultChecked={gender === "Women"}>Women</Radio>
              <Radio onChange={handleGender} value="Kids-Boys" defaultChecked={gender === "Kids-Boys"}>Kids-Boys</Radio>
              <Radio onChange={handleGender} value="Kids-Girls" defaultChecked={gender === "Kids-Girls"}>Kids-Girls</Radio>
            </VStack>
          </RadioGroup>
        </div>
  
        <div className="gender">
          <Heading mt={5} fontSize={16} >CATEGORIES</Heading>
          <VStack display={"flex"} alignItems={"start"} pt={6}>
            <Checkbox onChange={handleCategory} value={"Shirt"} defaultChecked={category.includes("Shirt")}> Shirts</Checkbox>
            <Checkbox onChange={handleCategory} value={"T-Shirt"} defaultChecked={category.includes("T-Shirt")}>T-Shirts</Checkbox>
            <Checkbox onChange={handleCategory} value={"Saree"} defaultChecked={category.includes("Saree")}>Saree's</Checkbox>
            <Checkbox onChange={handleCategory} value={"Skirts"} defaultChecked={category.includes("Skirts")}>Skirts</Checkbox>
            <Checkbox onChange={handleCategory} value={"Dhoti"} defaultChecked={category.includes("Dhoti")}>Dhoti's</Checkbox>
            <Checkbox onChange={handleCategory} value={"Kurta"} defaultChecked={category.includes("Kurta")}>Kurta's</Checkbox>
            <Checkbox onChange={handleCategory} value={"Ghagra"} defaultChecked={category.includes("Ghagra")}>Ghagra's</Checkbox>
            <Checkbox onChange={handleCategory} value={"Tops"} defaultChecked={category.includes("Tops")}>Tops</Checkbox>
          </VStack>
        </div>
  
        <div className="gender bottom">
        <Heading mt={5} fontSize={16} >COLORS</Heading>
          <VStack display={"flex"} alignItems={"start"} pt={6}>
            <div className="color">
              <Checkbox value="Red" onChange={handleColors} defaultChecked={color.includes("Red")}/>
              <div className="round red"></div>
              <Text>Red</Text>
            </div>
            <div className="color">
              <Checkbox value="Blue" onChange={handleColors} defaultChecked={color.includes("Blue")}/>
              <div className="round blue"></div>
              <Text>Blue</Text>
            </div>
            <div className="color">
              <Checkbox value="Green" onChange={handleColors} defaultChecked={color.includes("Green")} />
              <div className="round green"></div>
              <Text>Green</Text>
            </div>
            <div className="color">
              <Checkbox value="Black" onChange={handleColors} defaultChecked={color.includes("Black")}/>
              <div className="round black"></div>
              <Text>Black</Text>
            </div>
            <div className="color">
              <Checkbox value="White" onChange={handleColors} defaultChecked={color.includes("White")}/>
              <div className="round whte"></div>
              <Text>White</Text>
            </div>
            <div className="color">
              <Checkbox value="Yellow" onChange={handleColors} defaultChecked={color.includes("Yellow")}/>
              <div className="round yellow"></div>
              <Text>Yellow</Text>
            </div>
            <div className="color">
              <Checkbox value="Pink" onChange={handleColors} defaultChecked={color.includes("Pink")}/>
              <div className="round pink"></div>
              <Text>Pink</Text>
            </div>
            <div className="color">
              <Checkbox value="purple" onChange={handleColors} defaultChecked={color.includes("purple")} />
              <div className="round purple"></div>
              <Text>Purple</Text>
            </div>
            <div className="color">
              <Checkbox value="Orange" onChange={handleColors} defaultChecked={color.includes("Orange")} />
              <div className="round orange"></div>
              <Text>Orange</Text>
            </div>
            <div className="color">
              <Checkbox value="Brown" onChange={handleColors} defaultChecked={color.includes("Brown")} />
              <div className="round brown"></div>
              <Text>Brown</Text>
            </div>
          </VStack>
        </div>
      </DIV>
    );
  };
  
  export default SideBar;
  
  const DIV = styled.div`
   position: sticky;
   top: 70px;
   left: 0;
   right: 0;
   
  
    .gender {
      margin-top: 12px;
      
      padding-left: 12px;
      font-family: "Balsamiq Sans", cursive;
      border-bottom: 0.5px solid #9d9d9d;
      padding-bottom: 20px;
    }
    .color {
  
      display: flex;
      align-items: center;
      p{
          margin-left: 10px;
      }
    }
    .round {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      margin-left:10px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
    /* Red */
  .red {
    background-color: #D34B56;
  }
  
  /* Blue */
  .blue {
    background-color: #0074D9;
  }
  
  /* Green */
  .green {
    background-color: #5EB160;
  }
  
  /* Black */
  .black {
    background-color: black;
  }
  
  /* Yellow */
  .yellow {
    background-color: yellow;
  }
  
  /* Pink */
  .pink {
    background-color: pink;
  }
  
  /* Purple */
  .purple {
    background-color: purple;
  }
  
  /* Orange */
  .orange {
    background-color: orange;
  }
  
  /* Brown */
  .brown {
    background-color: brown;
  }
  
  .bottom{
      border-bottom:none;
  }
  `;