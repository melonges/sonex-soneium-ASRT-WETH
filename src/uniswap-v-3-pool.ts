import { Swap as SwapEvent } from "../generated/UniswapV3Pool/UniswapV3Pool";
import { Swap } from "../generated/schema";

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.contract = event.address;
  entity.sender = event.transaction.from;
  entity.recipient = event.params.recipient;
  entity.amount0 = event.params.amount0;
  entity.amount1 = event.params.amount1;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}
