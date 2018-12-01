import React from "react";
import CrazySection from "../CrazySection";
import ResourceTable from "../ResourceTable";
import formatEntropy from "../utils";
import Container from "../components/Container";
import Hash from "../components/ui/Hash";
import Loading from "../components/ui/Loading";
import File from "../components/SectionFile/File";
import KurasutaApi from "../KurasutaApi";
import {toast} from "react-toastify";
import {Sigma, RandomizeNodePositions, RelativeSize} from 'react-sigma';

export default class Sample extends React.Component {
  state = {
    sample: null
  };

  componentDidMount() {
    const sha256 = this.props.match.params.hash;

    new KurasutaApi().sample(sha256).then(response => {
      this.setState({sample: response.data});
    }).catch(error => {
      toast.error(error.response ? error.response.data.message : 'Hash not found');
      this.props.history.replace('/');
    });
  }

  render() {

    if (!this.state.sample) {
      return <Loading/>
    }

    const sample = this.state.sample;

    const removeEmpty = (row) => {
      return !!row['definition'];
    };

    const generalData = [
      {
        'term': 'Hashes',
        'definition': [sample.hash_sha256, sample.hash_md5, sample.hash_sha1].map(hash =>
          <Hash>{hash}</Hash>)
      },
      {'term': 'Entropy', 'definition': formatEntropy(sample.entropy)},
      {'term': 'Size', 'definition': sample.size},
      {'term': 'ssdeep', 'definition': <Hash>{sample.ssdeep}</Hash>},
      {'term': 'String count', 'definition': sample.strings_count},
      {'term': 'String count (len>9)', 'definition': sample.strings_count_of_length_at_least_10},
    ].filter(removeEmpty);

    const debugData = [
      {'term': 'Directory Count', 'definition': sample.debug_directory_count},
      {'term': 'PDB age', 'definition': sample.pdb_age},
      {'term': 'PDB GUID', 'definition': sample.pdb_guid},
      {'term': 'PDB Path', 'definition': sample.pdb_path},
      {'term': 'PDB Signature', 'definition': sample.pdb_signature},
      {'term': 'Timestamp', 'definition': sample.debug_timestamp},
    ].filter(removeEmpty);

    let graphData = {
      nodes: [{id: 'root', label: sample.hash_sha256}],
      edges: []
    };
    if (sample.sections) {
      sample.sections.map(section => {
        let id = 'section_' + section.hash_sha256;
        graphData.nodes.push({id: id, label: section.hash_sha256});
        graphData.edges.push({id: 'root_' + id, source: 'root', target: id, label: 'seciton of'});
      });
    }

    // console.log(sample.code_histogram);
    // sample.first_kb
    // sample.heuristic_iocs
    const style = {
      padding: 10,
    };

    return (
      <div style={style}>
        <Container>
          <CrazySection title="General" data={generalData}/>
          <CrazySection title="Debug" data={debugData}/>
          <File sample={sample}/>
          {sample.resources ? <h3>Resources</h3> : null}
          {sample.resources ? <ResourceTable>{sample.resources}</ResourceTable> : null}
        </Container>
        <Sigma graph={this.state.graphData} settings={{drawEdges: true, clone: false}}>
          <RelativeSize initialSize={15}/>
          <RandomizeNodePositions/>
        </Sigma>
      </div>
    );
  }
}
