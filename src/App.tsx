import React, { useState } from 'react';
import { Client } from 'boardgame.io/react';

import { TicTacToe } from './Game/TicTacToe';

const App = Client({ game: TicTacToe });

export default App;
