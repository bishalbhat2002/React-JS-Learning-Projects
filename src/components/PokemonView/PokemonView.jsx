import React, { useEffect, useState } from "react";
import { HiH1 } from "react-icons/hi2";

export const PokemonView = ({ limit = 24 }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getPokemon(limit) {
    try {
      setLoading(true);
      const api = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
      const response = await fetch(api);
      const pokemonList = await response.json();

      const pokemonApiList = pokemonList.results.map((pokemon) => pokemon.url);
      //  console.log(pokemonApiList);

      const listDataResponse = await pokemonApiList.map(async (api) => {
        const res = await fetch(api);
        return await res.json();
      });

      const pokemonDetails = await Promise.all(listDataResponse);
      setPokemonData(pokemonDetails);
      console.log(pokemonDetails);
      console.log(pokemonDetails[1]);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPokemon(limit);
  }, [limit]);

  return (
    <>
      {loading ? (
        <h1 className="w-200 max-w-8/10 m-auto py-5 rounded text-center text-3xl font-bold bg-green-300 text-gray-700 border border-slate-400 shadow-lg">
          <span className="animate-pulse">Loading...</span>
        </h1>
      ) : (
        ""
      )}
      {error ? (
        <h1 className="w-200 max-w-8/10 m-auto py-5 rounded text-center text-3xl font-bold bg-red-300 text-red-900 border border-slate-400 shadow-lg">
          {error}
        </h1>
      ) : (
        ""
      )}

      <div className="container mx-auto flex flex-wrap justify-center gap-x-5 gap-y-4">
        {pokemonData.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    </>
  );
};

function PokemonCard({ pokemon }) {
  const type = pokemon.types.map(({ type }) => type.name).join(", ");
  const abilities = pokemon.abilities
    .map(({ ability }) => ability.name)
    .join(", ");
  // console.log(pokemon)
  // console.log(abilities)

  return (
    <>
      {
        <div className="min-h-100 max-h-110 pb-5 w-70 bg-gray-300 rounded-lg hover:scale-104 transition-transform duration-200 ease-in-out shadow-md overflow-hidden group ">
          <div className="flex justify-center mt-8 relative">
            <span className="inline-block w-60 h-40 skew-10 -rotate-10 rounded-full absolute -top-6 bg-green-300 transition duration-200 ease-in-out">
              <span className="inline-block w-40 h-20 skew-10 scale-0 -rotate-10 rounded-full absolute top-10 left-10 bg-green-400 transition duration-200 ease-in-out group-hover:scale-100"></span>
            </span>

            <img
              className="size-40 z-10"
              src={pokemon.sprites.other.dream_world.front_default}
              alt=""
            />
          </div>
          <hr className="mx-auto mt-5 mb-2 w-8/10 text-gray-400" />
          {/* Details */}
          <div>
            <div className="text-center">
              <h2 className="font-bold text-2xl  text-gray-700 capitalize">
                {pokemon.name}
              </h2>
              <p className="inline-block mt-1 px-3 py-1 text-lg font-semibold text-gray-700 rounded-lg bg-fuchsia-300">
                {type}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-between mx-5 mt-4">

            <div className="text-sm font-semibold text-gray-800">
              Height: <span className="text-gray-600 font-semibold">{pokemon.height}</span>
            </div>
            <div className="text-sm font-semibold text-gray-800">
              Weight: <span className="text-gray-600 font-semibold">{pokemon.weight}</span>
            </div>
            <div className="text-sm font-semibold text-gray-800">
              Speed: <span className="text-gray-600 font-semibold">{pokemon.stats[5].base_stat}</span>
            </div>
          </div>

          <div className="flex justify-between mx-5 mt-2">

            <div className="text-sm font-semibold text-gray-800">Attack: <span className="text-sm text-gray-600 font-semibold">{pokemon.stats[1].base_stat}</span></div>

            <div className="text-sm font-semibold text-gray-800">Defense: <span className="text-sm text-gray-600 font-semibold">{pokemon.stats[2].base_stat}</span></div>

            <div className="text-sm font-semibold text-gray-800">Hp: <span className="text-sm text-gray-600 font-semibold">{pokemon.stats[0].base_stat}</span></div>

            
       
          </div>

          <div className="mx-5 mt-2 text-sm font-semibold text-gray-800">Abilities: 
            <span className="text-gray-600 font-semibold"> {abilities}</span>
          </div>
        </div>
      }
    </>
  );
}
