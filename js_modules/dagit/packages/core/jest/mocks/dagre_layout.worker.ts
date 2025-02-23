// eslint-disable-next-line no-restricted-imports
import {ILayoutOp, layoutOpGraph} from '../../src/graph/layout';
import {GraphData} from '../../src/workspace/asset-graph/Utils';
import {layoutAssetGraph} from '../../src/workspace/asset-graph/layout';

type WorkerMessageData =
  | {type: 'layoutOpGraph'; ops: ILayoutOp[]; parentOp: ILayoutOp}
  | {type: 'layoutAssetGraph'; graphData: GraphData};

// eslint-disable-next-line import/no-default-export
export default class MockWorker {
  onmessage = (_: any) => {};

  // mock expects data: { } instead of e: { data: { } }
  postMessage(data: WorkerMessageData) {
    if (data.type === 'layoutOpGraph') {
      const {ops, parentOp} = data;
      this.onmessage({data: layoutOpGraph(ops, parentOp)});
    } else if (data.type === 'layoutAssetGraph') {
      const {graphData} = data;
      this.onmessage({data: layoutAssetGraph(graphData)});
    }
  }
}
