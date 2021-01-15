/* global google */
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Marker } from 'react-google-maps'
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'
import {
  Alert as AlertOutlineIcon,
  CloseCircle as CloseOutlineIcon,
} from 'mdi-material-ui'

const useStyles = makeStyles({
  alertIcon: {
    color: '#ff7800',
  },
  defectiveIcon: {
    color: 'red',
  },
})

const MarkerCarrierIcon = ({ lac, handleClick }) => {
  const classes = useStyles()

  return (
    <Marker
      icon={{
        url: `/img/carriersIcons/pothole.png`,
        size: new google.maps.Size(256, 256),
        condition: lac.condition,
      }}
      defaultPosition={{ lat: lac.lat, lng: lac.lon }}
    >
      {lac.condition === 'anormal' && (
        <InfoBox
          options={{
            pixelOffset: new google.maps.Size(-12, -73),
            disableAutoPan: true,
          }}
        >
          <CloseOutlineIcon className={classes.defectiveIcon} />
        </InfoBox>
      )}
      {lac.condition === 'alerta' && (
        <InfoBox
          options={{
            pixelOffset: new google.maps.Size(-12, -73),
            disableAutoPan: true,
          }}
        >
          <AlertOutlineIcon className={classes.alertIcon} />
        </InfoBox>
      )}
    </Marker>
  )
}

// const mapDispatchToProps = dispatch => ({
//   handleClick: lac => dispatch(ActionCreators.setPerimeterSelectedLac(lac))
// })

export default MarkerCarrierIcon
