import { Star } from 'lucide-react';

interface TopGame {
  id: string;
  title: string;
  views: number;
  plays: number;
  rating: number;
}

interface TopGamesTableProps {
  games?: TopGame[];
}

export default function TopGamesTable({ games }: TopGamesTableProps) {
  const topGames = games || [];

  // Get category from game ID (simple mapping)
  const getCategory = (id: string): string => {
    if (id.includes('subway') || id.includes('temple') || id.includes('stickman')) return 'Action';
    if (id.includes('candy') || id.includes('2048') || id.includes('tetris')) return 'Puzzle';
    if (id.includes('moto') || id.includes('hill') || id.includes('drift')) return 'Racing';
    if (id.includes('basketball') || id.includes('football')) return 'Sports';
    return 'Casual';
  };

  return (
    <div className="rounded-xl border bg-card shadow-sm">
      <div className="border-b p-6">
        <h3 className="text-lg font-semibold">Top Performing Games</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Most viewed games this month
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50 dark:bg-slate-900/50">
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Game
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Views
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Plays
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Rating
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {topGames.map((game) => (
              <tr key={game.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold">
                      {game.title.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{game.title}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
                    {getCategory(game.id)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {game.views.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                  {game.plays.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">{game.rating.toFixed(1)}</span>
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
