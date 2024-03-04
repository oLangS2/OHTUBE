import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [searchKeyword,setSearchKEyword]= useState(""); // 초기값을 빈 문자열로 설정하고 searchKeyword 라는 변수는 사용자가 입력한 검색어를 저장한다.
    const navigate = useNavigate();

    const handleSearch =() => { 
        console.log(searchKeyword)
        if(searchKeyword){
            navigate(`/search/$[searchKeyword]`);
            setSearchKEyword("");
        } //handleSearch 함수는 검색 버튼을 클릭하거나 Enter버튼을 눌렀을 떄 호출된다. 검색어가 있는 경우에만 내비게이션을 수행 후 초기화 한다.
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
