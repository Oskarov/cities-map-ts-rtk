import React, {useEffect, useState} from 'react';
import {Map, Placemark, YMapsApi} from "react-yandex-maps";
import {useDispatch, useSelector} from "react-redux";
import {getPointsEffect} from "../../effect/points";
import {TStore} from "../../store/store";

interface MapProps {

}

const CityMap: React.FC<MapProps> = ({}) => {
    const [yMapsApi, setYMapsApi] = useState<YMapsApi>();
    const [yMapsRef, setYMapsRef] = useState<React.Ref<any>>();
    const [zoom, setZoom] = useState(9);
    const [centerCoordinates, setCenterCoordinates] = useState([55.75, 37.57]);
    const mapState = React.useMemo(() => ({center: centerCoordinates, zoom}), [
        zoom, centerCoordinates
    ]);

    const dispatch = useDispatch();
    const { points } = useSelector((state: TStore) => state.mainPoints);

    useEffect(() => {
            dispatch(getPointsEffect());
    }, []);

    console.log(points);


    return (<div>
        <Map state={mapState} width='100%' height='100%' instanceRef={(ref) => setYMapsRef(ref)} onLoad={(maps) => {
            setYMapsApi(maps)
        }}>
            {points.map(point=>{
                return <Placemark key={point.id}
                                  geometry={[parseFloat(point.latitude), parseFloat(point.longitude),]}
                                  options={{
                                      preset: 'islands#blueLeisureCircleIcon',
                                      iconColor: 'blue',
                                      zIndex: '8',
                                  }}
                >
                </Placemark>
            })}
        </Map>
    </div>);
}

export default CityMap;
