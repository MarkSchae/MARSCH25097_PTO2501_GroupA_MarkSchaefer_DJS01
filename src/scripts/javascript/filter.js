// Might be easier to filter the podcasts first into their relavent genres

// Create a dedicated filter class

/* Example code
const playersWithTeams = players.map(player => ({
  ...player,
  teams: teams.filter(t => player.teamIds.includes(t.id)).map(t => t.name).join(", ")
}));

// Class example 
class PlayerFilter {
  static byTeam(players, teamId) {
    return players.filter(p => p.teamIds.includes(teamId));
  }

  static byType(players, type) {
    return players.filter(p => p.type === type);
  }

  static searchByName(players, query) {
    const lower = query.toLowerCase();
    return players.filter(p => p.name.toLowerCase().includes(lower));
  }
}

// Usage example:
let filtered = PlayerFilter.byTeam(playersWithTeams, 2);
filtered = PlayerFilter.searchByName(filtered, "ali"); combine filters easily/*

