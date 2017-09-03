import React, {Component} from "react";
import {Text, TouchableOpacity} from "react-native";
import {Container, Content} from "native-base";
import {Actions} from "react-native-router-flux";
import ParkListItem from "./ParkListItem";

export default class ParkList extends Component {
    state = {parks: []};

    componentWillMount() {
        const AZsPARKS = "ever,voya,shen,grca,hosp,acad,gumo,bibe,cave,romo,dena,badl,wica,glca,hosp,jazz,gett,inde,gwmp,coga,linc,nama,vive,wamo,whho,wwii";
        const API_KEY = "C127CF67-F403-4823-AA42-B87B1E235D23";

        fetch(`https://developer.nps.gov/api/v0/parks?parkCode=${AZsPARKS}`, {
            method: "GET",
            headers: {
                "Authorization": API_KEY
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                return this.setState({
                    parks: responseData.data
                });
            })
            .catch((error) => {
                console.log("There has been a problem with your fetch operation:", error.message);
            });
    }

    renderParks() {
        return this.state.parks.map(park =>
            <TouchableOpacity key={park.id} park={park} onPress={() => Actions.parkOverview({park})}>
                <ParkListItem key={park.id} park={park}/>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <Container>
                <TouchableOpacity onPress={() => Actions.searchPage()}>
                    <Text>Temporary link to Search Page</Text>
                </TouchableOpacity>
                <Content>
                    {this.renderParks()}
                </Content>
            </Container>
        );
    }
}
