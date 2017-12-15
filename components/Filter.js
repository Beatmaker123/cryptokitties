import React, { Fragment } from 'react'

const Filter = () => (
  <Fragment>
    <div className='Filter'>
      <div className='Filter-container'>
        <div className='Filter-selectors'>
          <select className='Filter-select' placeholder='Sorting order'>
            <option value>Youngest first</option>
            <option value='old-first'>Oldest first</option>
            <option value='cheap'>Cheapest first</option>
            <option value='expensive'>Most expensive first</option>
          </select>
        </div>
        <div className='Filter-sortBy'>Sort by</div>
        <div className='Filter-tabs'>
          <span className='Filter-tab Filter-tab--active'>For Sale</span>
          <span className='Filter-tab'>Siring</span>
          <span className='Filter-tab'>Gen 0</span>
          <span className='Filter-tab'>All Kitties</span>
        </div>
      </div>
    </div>
    <div className='BrowseFilterBar-filterResults'>
      <div className='KittiesFilter'>
        <div className='KittiesFilter-header'>
          <span className='KittiesFilter-header-count'>
            66&nbsp;184 results
          </span>
          <span className='KittiesFilter-header-toggle' role='button'>
            <svg
              className='KittiesFilter-header-toggle-icon'
              width={18}
              height={12}
              viewBox='0 0 18 12'
            >
              <g
                fill='none'
                fillRule='evenodd'
                strokeLinecap='round'
                strokeWidth={2}
              >
                <path d='M1.5 1h15M4.5 6h10M7.5 11h3' />
              </g>
            </svg>
            {/* react-text: 100 */}Filter results
            {/* /react-text */}
          </span>
        </div>
      </div>
    </div>
  </Fragment>
)

export default Filter
