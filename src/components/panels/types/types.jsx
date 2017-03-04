import React, { Component } from 'react';
import TypeItem from './typeItem';

class Types extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="typesContent">
        <TypeItem
          first={{ itemId: "attackIndication", text: 'Attack Indication', value: data['AttackIndication'] }}
          second={{ itemId: "dataLeakage", text: 'Data Leakage', value: data['DataLeakage'] }}
        />
        <TypeItem
          first={{ itemId: "phishing", text: 'Phishing', value: data['Phishing'] }}
          second={{ itemId: "brandSecurity", text: 'Brand Security', value: data['BrandSecurity'] }}
        />
        <TypeItem
          first={{ itemId: "exploitableData", text: 'Exploitable Data', value: data['ExploitableData'] }}
          second={{ itemId: "vip", text: 'vip', value: data['vip'] }}
        />
      </div>
    );
  }
}

export default Types;
