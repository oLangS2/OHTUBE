import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [searchKeyword,setSearchKEyword]= useState(""); // 초기값을 빈 문자열로 설정하고 searchKeyword 라는 변수는 사용자가 입력한 검색어를 저장합니다.
    const navigate = useNavigate();

    const handleSearch =() => {
        console.log(searchKeyword)
        if(searchKeyword){
            navigate(`/search/$[searchKeyword]`);
            setSearchKEyword("");
        }
    };

    return (
        <div id='search'>
            <div className='search__inner'>
                <label htmlFor='searchInput'>
                    <span className='ir'>검색</span>
                </label>
                <input 
                    type='search' 
                    id='searchInput' 
                    placeholder='검색어를 입력해주세요!' 
                    autoComplete='off' 
                    className='search__input' 
                    onChange={e=>setSearchKEyword(e.target.value)}
                    onkeyDown={e=>{
                        if(e.key==='Enter'){
                            handleSearch();
                        }
                    }}
                />
            </div>
        </div>
    )
}
export default Search
