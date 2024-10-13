const Type = ()=> (
    <div className="d-flex justify-content-center align-items-center">
        <label>
            <span className="fw-normal text-start filter-search-label">Type</span>
            <select className="form-select fw-bold fs-6 filter-search-select">
                <option className="fw-bold fs-6 selected">used car</option>
                <option className="fw-bold fs-6 selected">new car</option>
                <option className="fw-bold fs-6 selected">vangari car</option>
            </select>
        </label>
        <div className="vertical-line"></div>
    </div>

)

const Make = ()=>(
    <div className="d-flex justify-content-center align-items-center">
        <label>
            <span className="fw-normal text-start filter-search-label">Make</span>
            <select className="form-select fw-bold fs-6 filter-search-select" >
                <option className="fw-bold fs-6 " selected>Infiniti</option>
                <option className="fw-bold fs-6" value={1}>one</option>
                <option className="fw-bold fs-6 " value={2}>two</option>
                <option className="fw-bold fs-6 " value={3}>three</option>
            </select>
        </label>
        <div className="vertical-line"></div>
    </div>

)

const Year = ()=>(
    <div className="d-flex justify-content-center align-items-center">
    <label>
    <span className="fw-normal text-start filter-search-label">Year</span>
        <select className="form-select fw-bold fs-6 filter-search-select outline-none" >
            <option className="fw-bold fs-6 " selected>2000</option>
            <option className="fw-bold fs-6" value={1}>2005</option>
            <option className="fw-bold fs-6 " value={2}>2010</option>
            <option className="fw-bold fs-6 " value={3}>2024</option>
        </select>
    </label>
    <div className="vertical-line"></div>
</div>
)

const Model = ()=>(
    <div className="d-flex justify-content-center align-items-center">
    <label>
    <span className="fw-normal text-start filter-search-label">Model</span>
        <select className="form-select fw-bold fs-6 filter-search-select outline-none" >
            <option className="fw-bold fs-6 " selected>BMW XM</option>
            <option className="fw-bold fs-6" value={1}>BMW X7</option>
            <option className="fw-bold fs-6 " value={2}>BMW X6</option>
            <option className="fw-bold fs-6 " value={3}>BMW X10</option>
        </select>
    </label>
    <div className="vertical-line"></div>
</div>

)

const Price = ()=>(
    <label>
    <span className="fw-normal text-start filter-search-label">Model</span>
        <select className="form-select fw-bold fs-6 filter-search-select outline-none" >
            <option className="fw-bold fs-6 " selected>10000</option>
            <option className="fw-bold fs-6" value={1}>150000</option>
            <option className="fw-bold fs-6 " value={2}>20000</option>
            <option className="fw-bold fs-6 " value={3}>260000</option>
        </select>
    </label>

)

export const FilterAndSearch = ()=>{
 return(
    <>
    <section>
        <h1 className="text-center fw-bold fs-2 filter-search-section title">Which vehicles you are looking for? </h1>
        <div className="d-flex justify-content-center align-items-center filter-search-box g-3">
            <Type />
            < Make />
            <Year />
            <Model/>
            <Price/>
            <button className="btn btn-info search-button"><i className="bi bi-search-heart"></i> Search</button>
        </div>
    </section>
    
    </>
 )
}