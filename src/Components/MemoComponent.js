import React,{memo} from 'react';

const MemoComponent = ({ParameterName}) => {
    ///console.log(ParameterName);
    return(
        <>
        <h5 className="">Hello I am MemoComponent Components</h5>
        <h5 className="mb-0">Hello {ParameterName}</h5>
        </>
    )
}

export default memo(MemoComponent);
// export default MemoComponent;