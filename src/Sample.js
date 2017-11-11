import React from "react";
import CrazySection from "./CrazySection";
import SectionTable from "./SectionTable";
import ResourceTable from "./ResourceTable";
import formatEntropy from "./utils";
import Container from "./components/Container";
import Hash from "./components/ui/Hash";

export default class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.sample = props.sample;
  }

  render() {
    const removeEmpty = (row) => {
      return !!row['definition'];
    };
    const generalData = [
      {
        'term': 'Hashes',
        'definition': [this.sample.hash_sha256, this.sample.hash_md5, this.sample.hash_sha1].map(hash =>
          <Hash>{hash}</Hash>)
      },
      {'term': 'Entropy', 'definition': formatEntropy(this.sample.entropy)},
      {'term': 'Size', 'definition': this.sample.size},
      {'term': 'ssdeep', 'definition': <Hash>{this.sample.ssdeep}</Hash>},
      {'term': 'Entry Point', 'definition': this.sample.entry_point},
      {'term': 'Build Timestamp', 'definition': this.sample.build_timestamp},
    ].filter(removeEmpty);

    const debugData = [
      {'term': 'Directory Count', 'definition': this.sample.debug_directory_count},
      {'term': 'PDB age', 'definition': this.sample.pdb_age},
      {'term': 'PDB GUID', 'definition': this.sample.pdb_guid},
      {'term': 'PDB Path', 'definition': this.sample.pdb_path},
      {'term': 'PDB Signature', 'definition': this.sample.pdb_signature},
      {'term': 'Timestamp', 'definition': this.sample.debug_timestamp},
    ].filter(removeEmpty);

    const otherData = [
      {'term': 'Overlay SHA256', 'definition': <Hash>{this.sample.overlay_sha256}</Hash>},
      {'term': 'Overlay Size', 'definition': this.sample.overlay_size},
      {'term': 'Overlay Entropy', 'definition': this.sample.overlay_entropy},
      {'term': 'Overlay ssdeep', 'definition': <Hash>{this.sample.overlay_ssdeep}</Hash>},
      {'term': 'String count', 'definition': this.sample.strings_count},
      {'term': 'String count (len>9)', 'definition': this.sample.strings_count_of_length_at_least_10},
    ].filter(removeEmpty);

    // console.log(this.sample.code_histogram);
    // this.sample.first_kb
    // this.sample.heuristic_iocs
    const style = {
      padding: 10,
    };
    return (
      <div style={style}>
        <Container>
          <CrazySection title="General" data={generalData}/>
          <CrazySection title="Debug" data={debugData}/>
          <CrazySection title="Other" data={otherData}/>

          <SectionTable>{this.sample.sections}</SectionTable>
          <ResourceTable>{this.sample.resources}</ResourceTable>
        </Container>
      </div>
    );
  }
}
