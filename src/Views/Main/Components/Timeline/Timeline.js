import React from 'react';
import TimeElement from './TimeElement';
import { TimeEscolaPia, TimeEscolaPiaExtended } from './TimeEscolaPia';
import { TimePasiona, TimePasionaExtended } from './TimePasiona';

export default function Timeline() {
  return (
    <div className="min-h-screen flex justify-center items-center" id="timeline">
      <div className="w-4/5 flex flex-col mx-auto">
        <TimeElement
          name="Escola Pia Mataró"
          date="2017 - 2019"
          direction="left"
          lineColor="bg-gray-400"
          elementContent={TimeEscolaPia}
          elementContentExtended={TimeEscolaPiaExtended}
          chipColor="border-gray-400"
          chipDate="2017"
        />
        <TimeElement
          name="Escola Pia Mataró"
          date="2017 - 2019"
          direction="left"
          lineColor="bg-gray-400"
          elementContent={TimePasiona}
          elementContentExtended={TimePasionaExtended}
          chipColor="border-gray-400"
          chipDate="2017"
        />
        <TimeElement
          name="Escola Pia Mataró"
          date="2017 - 2019"
          direction="left"
          lineColor="bg-gray-400"
          elementContent={TimeEscolaPia}
          elementContentExtended={TimeEscolaPiaExtended}
          chipColor="border-gray-400"
          chipDate="2017"
        />
        <TimeElement
          name="Escola Pia Mataró"
          date="2017 - 2019"
          direction="left"
          lineColor="bg-gray-400"
          elementContent={TimeEscolaPia}
          elementContentExtended={TimeEscolaPiaExtended}
          chipColor="border-gray-400"
          chipDate="2017"
        />
      </div>
    </div>
  );
}
