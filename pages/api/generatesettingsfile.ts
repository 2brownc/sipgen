import type { NextApiRequest, NextApiResponse } from 'next';

import { Settings } from '../../src/app/Settings';
import { generateXML } from '../../src/utils/GenerateXML';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const name = req.body.name;
    const message: Settings = req.body.message;

    console.log("server", name, message);

    const content = generateXML(message);

    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Content-Disposition', `attachment; filename=phonesettings.xml`);

    res.send(content);
  }
}