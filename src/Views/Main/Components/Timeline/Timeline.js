import React from 'react';
import TimeElement from './TimeElement';
import { TimeEscolaPia, TimeEscolaPiaExtended } from './TimeEscolaPia';

export default function Timeline() {
  return (
    <div className="min-h-screen flex justify-center" id="timeline">
      <div className="w-4/5 mx-auto">
        <TimeElement
          name="Escola Pia"
          date="20 Nov- 30 Nov"
          direction="left"
          lineColor="bg-blue-300"
          elementContent={TimeEscolaPia}
          elementContentExtended={TimeEscolaPiaExtended}
          chipColor="border-red-300"
          chipDate="20 September"
        />
        <TimeElement
          name="Escola Pia"
          date="20 Nov- 30 Nov"
          direction="right"
          lineColor="bg-blue-300"
          elementContent={TimeEscolaPia}
          elementContentExtended={TimeEscolaPiaExtended}
          chipColor="border-red-300"
          chipDate="20 September"
        />
        <TimeElement
          name="Escola Pia"
          date="20 Nov- 30 Nov"
          direction="left"
          lineColor="bg-blue-300"
          elementContent={TimeEscolaPia}
          elementContentExtended={TimeEscolaPiaExtended}
          chipColor="border-red-300"
          chipDate="20 September"
        />
        <TimeElement
          name="Escola Pia"
          date="20 Nov- 30 Nov"
          direction="left"
          lineColor="bg-blue-300"
          elementContent={TimeEscolaPia}
          elementContentExtended={TimeEscolaPiaExtended}
          chipColor="border-red-300"
          chipDate="20 September"
        />
      </div>
    </div>
  );
}
