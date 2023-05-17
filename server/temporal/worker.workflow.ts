import { NativeConnection, Worker } from '@temporalio/worker';
import * as activities from './activities';
import fs from 'fs-extra';
import { getConfig, TASK_QUEUE_WORKFLOW } from './config';
import dotenv from 'dotenv';
dotenv.config({path:__dirname+'/./../../.env'});

// import { getDataConverter } from './data-converter';

const config = getConfig();

async function run() {

  console.log(JSON.stringify(config));
  const cert = await fs.readFile(config.certPath);
  const key = await fs.readFile(config.keyPath);

  const connection = await NativeConnection.connect({
    // defaults port to 7233 if not specified
    address: config.address,
    tls: {
      // set to true if TLS without mTLS
      // See docs for other TLS options
      clientCertPair: {
        crt: cert,
        key: key,
      },
    },
  });

  const worker = await Worker.create({
    connection: connection,
    workflowsPath: require.resolve('./workflows'),
    activities: activities,
    namespace: config.namespace,
    taskQueue: TASK_QUEUE_WORKFLOW,
    // dataConverter: await getDataConverter(),
    enableNonLocalActivities: false
  });
  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});