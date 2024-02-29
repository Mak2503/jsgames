"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const TicTacToePlay = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [grids, setGrids] = useState(
    indices.map((grid) => ({
      index: grid,
      value: null,
    }))
  );

  const [filledGrids, setFilledGrids] = useState<number[]>([]);
  const [xPositions, setXPositions] = useState<number[]>([]);
  const [oPositions, setOPositions] = useState<number[]>([]);
  const [gridValue, setGridValue] = useState("X");
  const players = [
    "Player 1",
    searchParams && searchParams?.mode === "single" ? "Computer" : "Player 2",
  ];
  const [player, setPlayer] = useState(players[Math.floor(Math.random() * 2)]);

  const gridClickHandler = (index: number) => {
    if (filledGrids.includes(index)) return;
    else {
      setPlayer((player) => (player === "Player 1" ? "Player 2" : "Player 1"));
      setFilledGrids((grids) => [...grids, index]);
      let newGrids = JSON.parse(JSON.stringify(grids));
      newGrids[index]["value"] = gridValue;
      setGrids(newGrids);
      if (gridValue === "X") {
        setXPositions((pos) => [...pos, index]);
        setGridValue("O");
      } else if (gridValue === "O") {
        setOPositions((pos) => [...pos, index]);
        setGridValue("X");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-white pt-10">
      <div className="text-2xl">Tic Tac Toe</div>
      <div className="mt-16 text-left">{player} is playing</div>
      <div className="grid grid-cols-3 gap-4 sm:mt-5 mt-10">
        {grids.map((grid) => (
          <div
            className="p-4 bg-white sm:w-36 sm:h-36 w-16 h-16 rounded-lg text-green-500 flex justify-center items-center text-6xl font-bold cursor-pointer"
            key={grid.index}
            onClick={() => gridClickHandler(grid.index)}
          >
            {grid.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToePlay;
