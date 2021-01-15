/* global google */
import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/styles'
import { SearchBox as GoogleSearchBox } from 'react-google-maps/lib/components/places/SearchBox'

const useStyles = makeStyles({
  searchBox: {
    marginTop: 10,
    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  },
  input: {
    width: 240,
    height: 40,
    fontSize: 14,
    borderRadius: 3,
    outline: `none`,
    padding: `0 12px`,
    boxSizing: `border-box`,
    textOverflow: `ellipses`,
    border: `1px solid transparent`,
  },
})

const SearchBox = props => {
  const {
    onPlacesChanged,
    controlPosition = google.maps.ControlPosition.TOP_LEFT,
  } = props

  const classes = useStyles()
  const searchBoxRef = useRef(null)

  const onChange = () => {
    onPlacesChanged(searchBoxRef.current.getPlaces()[0])
  }

  return (
    <GoogleSearchBox
      ref={searchBoxRef}
      onPlacesChanged={onChange}
      controlPosition={controlPosition}
    >
      <div className={classes.searchBox}>
        <input
          type="text"
          placeholder={'Pesquisar'}
          className={classes.input}
        />
      </div>
    </GoogleSearchBox>
  )
}

export default SearchBox
